

const getSimilarPhotos = (photoData) =>{
  const similarPhotosObj={}
  let id;
  photoData.forEach((photo) => {
    id = photo.id;
    similarPhotosObj[id] = {
      id: photo.id,
      similar_photos: photo.similar_photos,
    }
  });
  return similarPhotosObj[id];
}

  module.exports ={ getSimilarPhotos}