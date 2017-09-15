class SubgenresController < ApplicationController
  before_action :authenticate_admin!
  before_action :set_genre

  def show
  	@subgenre = @genre.subgenres.find(params[:id])
  end
  def create
    @subgenre = @genre.subgenres.build(subgenre_params)

    if @subgenre.save
      flash[:success] = "You made a new subgenre for that genre!"
      redirect_back fallback_location: root_path
    else
      flash[:alert] = "Check the subgenre form, something went wrong."
      render root_path
    end
  end

  def destroy
    @subgenre = @genre.subgenres.find(params[:id])

    @subgenre.destroy
    flash[:success] = "Subgenre deleted."
    redirect_to root_path
  end

  private

  def subgenre_params
    params.require(:subgenre).permit(:name, :description)
  end

  def set_genre
    @genre = Genre.find(params[:genre_id])
  end
end
