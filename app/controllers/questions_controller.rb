class QuestionsController < ApplicationController
  before_action :authenticate_admin!
  before_action :set_subgenre

  def create
    @question = @subgenre.questions.build(question_params)

    if @question.save
      flash[:success] = "You made a new question for that subgenre!"
      redirect_back fallback_location: root_path
    else
      flash[:alert] = "Check the question form, something went wrong."
      render root_path
    end
  end

  def destroy
    @question = @subgenre.questions.find(params[:id])

    @question.destroy
    respond_to do |format|
      format.html {
      	flash[:success] = "question deleted."
      	redirect_to root_path
      }
      format.json
    end
  end

  private

  def question_params
    params.require(:question).permit(:question, :option1, :option2, :option3, :option4, :answer, :image, :audio)
  end

  def set_subgenre
    @subgenre = Subgenre.find(params[:subgenre_id])
  end
end
