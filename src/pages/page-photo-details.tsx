import Container from "../components/container";
import Skeleton from "../components/skeleton";
import Text from "../components/text";
import PhotosNavigator from "../contexts/photos/components/photos-navigator";
import type { Photo } from "../contexts/photos/models/photo";
export default function PagePhotoDetails() {
  //Apenas para fazer o teste do mock
  const isLoadingPhoto = false;

  const photo = {
    id: "123",
    title: "Olá mundo",
    imageId: "portrait-tower.png",
    albums: [
      { id: "1234", title: "Album 1" },
      { id: "4321", title: "Album 2" },
      { id: "8976", title: "Album 3" },
    ],
  } as Photo;

  
  return (
    <Container>
      <header className="flex items-center justify-between gap-8 mb-8">
        {!isLoadingPhoto ? (
          <Text variant="heading-large">{photo.title}</Text>
        ) : (
          <Skeleton className="w-48 h-8" />
        )}

        <PhotosNavigator />
      </header>
    </Container>
  );
}
