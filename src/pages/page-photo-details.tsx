import Button from "../components/button";
import Container from "../components/container";
import ImagePreview from "../components/image-preview";
import Skeleton from "../components/skeleton";
import Text from "../components/text";
import AlbumListSelectable from "../contexts/albums/components/albums-list-selectable";
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
          <Text as="h2" variant="heading-large">
            {photo.title}
          </Text>
        ) : (
          <Skeleton className="w-48 h-8" />
        )}

        <PhotosNavigator />
      </header>

      <div className="grid grid-cols-[21rem_1fr] gap-24">
        <div className="space-y-3">
          {!isLoadingPhoto ? (
            <ImagePreview
              src={`/images/${photo?.imageId}`}
              title={photo.title}
              ImageClassName="h-[21rem]"
            />
          ) : (
            <Skeleton className="w-[21rem] h-[21rem]" />
          )}

          {!isLoadingPhoto ? (
            <Button variant="destructive">Excluir</Button>
          ) : (
            <Skeleton className="w-20 h-10" />
          )}
        </div>

        <div className="py-3">
          <Text as="h3" variant="heading-medium" className="mb-6">
            Álbums
          </Text>

          <AlbumListSelectable
            photo={photo}
            albums={[
              { id: "1234", title: "Album 1" },
              { id: "4321", title: "Album 2" },
              { id: "8976", title: "Album 3" },
            ]}
            loading={isLoadingPhoto}
          />
        </div>
      </div>
    </Container>
  );
}
