class QuizzesController < ApplicationController
  before_action :authenticate_any!
  before_action :set_quiz, only: [:show, :edit, :update, :destroy]
  before_action :owned_quiz, only: [:edit, :update, :destroy]
  before_action :set_subgenre

  def new
    @genre = @subgenre.genre
  end

  def create
    @quiz = @subgenre.quizzes.build
    @quiz.user_id = current_user.id
    prng = Random.new
    offset = Random.rand(@quiz.subgenre.questions.count)
    @quiz.question_id = @quiz.subgenre.questions.offset(offset).first.id
    @quiz.score = 0
    @quiz.randomGenerator = Base64.encode64(Marshal.dump(prng))
    @quiz.doubleTryLeft = true
    @quiz.skipQuestionLeft = true
    @quiz.hasFinished = false
    if @quiz.save
      flash[:success] = "You made a new quiz for that subgenre!"
      redirect_back fallback_location: root_path
    else
      flash[:alert] = "Check the quiz form, something went wrong."
      render root_path
    end
  end

  def edit
    @genre = @subgenre.genre
  end

  def update
    usedDoubleTry = ActiveModel::Type::Boolean.new.cast(quiz_params[:doubleTryUse])
    usedSkipQuestion = ActiveModel::Type::Boolean.new.cast(quiz_params[:skipQuestionUse])

    if (@quiz.hasFinished)
      flash[:alert] = "Already Finished"
      redirect_back fallback_location: root_path
    elsif (usedSkipQuestion && !@quiz.skipQuestionLeft)
      flash[:alert] = "Already Used skipQuestion"
      redirect_back fallback_location: root_path
    elsif (usedDoubleTry && !@quiz.doubleTryLeft)
      flash[:alert] = "Already Used skipQuestion"
      redirect_back fallback_location: root_path
    elsif usedSkipQuestion
      prng = Marshal.load(Base64.decode64(@quiz.randomGenerator))
      offset = Random.rand(@quiz.subgenre.questions.count)
      @quiz.question_id = @quiz.subgenre.questions.offset(offset).first.id
      @quiz.randomGenerator = Base64.encode64(Marshal.dump(prng))
      @quiz.skipQuestionLeft = false
      if @quiz.save
        flash[:success] = "Skipped Question"
        redirect_back fallback_location: root_path
      else
        flash[:alert] = "Check the form, something went wrong."
        render root_path
      end
    elsif usedDoubleTry
      @quiz.doubleTryLeft = false
      if (quiz_params[:answer].chars.sort.join == @quiz.question.answer.chars.sort.join)
        @quiz.score = @quiz.score + 1
        prng = Marshal.load(Base64.decode64(@quiz.randomGenerator))
        offset = Random.rand(@quiz.subgenre.questions.count)
        @quiz.question_id = @quiz.subgenre.questions.offset(offset).first.id
        @quiz.randomGenerator = Base64.encode64(Marshal.dump(prng))
      end
      if @quiz.save
        flash[:success] = "Second try"
        redirect_back fallback_location: root_path
      else
        flash[:alert] = "Check the form, something went wrong."
        render root_path
      end
    else
      if (quiz_params[:answer].chars.sort.join == @quiz.question.answer.chars.sort.join)
        @quiz.score = @quiz.score + 1
        prng = Marshal.load(Base64.decode64(@quiz.randomGenerator))
        offset = Random.rand(@quiz.subgenre.questions.count)
        @quiz.question_id = @quiz.subgenre.questions.offset(offset).first.id
        @quiz.randomGenerator = Base64.encode64(Marshal.dump(prng))
      else
        @quiz.hasFinished = true
      end
      if @quiz.save
        flash[:success] = "Submitted"
        redirect_back fallback_location: root_path
      else
        flash[:alert] = "Check the form, something went wrong."
        render root_path
      end
    end
  end

  def show
    @genre = @subgenre.genre
  end

  def destroy
    @quiz = @subgenre.quizzes.find(params[:id])

    @quiz.destroy
    flash[:success] = "quiz deleted."
    redirect_to root_path
  end
  private

  def quiz_params
    params.require(:quiz).permit(:answer, :doubleTryUse, :skipQuestionUse)
  end
  def set_quiz
    @quiz = Quiz.find(params[:id])
  end
  def set_subgenre
    @subgenre = Subgenre.find(params[:subgenre_id])
  end
  def owned_quiz
    unless current_user == @quiz.user
      flash[:alert] = "That quiz doesn't belong to you!"
      redirect_to root_path
    end
  end
  def authenticate_any!
    if admin_signed_in?
        true
    else
        authenticate_user!
    end
end
end