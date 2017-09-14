class GenresController < ApplicationController
  before_action :authenticate_admin!
  before_action :set_genre, only: [:show, :edit, :update, :destroy]
  def index
    @genres = Genre.all
  end
  def new
    @genre = Genre.new
  end
  def create
    @genre = Genre.create(genre_params)
    if @genre.save
      flash[:success] = "New genre has been created!"
      redirect_to genres_path
    else
      flash[:alert] = "New genre couldn't be created!  Please check the form."
      render :new
    end
  end
  def show
  end
  def edit
  end
  def update
    if @genre.update(genre_params)
      flash[:success] = "genre updated."
      redirect_to genres_path
    else
      flash.now[:alert] = "Update failed. Please check the form."
      render :edit
    end
  end
  def destroy
    @genre.destroy
    redirect_to genres_path
  end
  private

  def genre_params
    params.require(:genre).permit(:name, :description)
  end
  def set_genre
    @genre = Genre.find(params[:id])
  end
end
