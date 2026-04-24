import Container from "../components/container";
import AlbumsFilter from "../contexts/albums/components/albums-filter";
import useAlbums from "../contexts/albums/hooks/use-albums";
import PhotosList from "../contexts/photos/components/photos-list";

export default function Home() {
  const {albums, isLoadingAlbums} = useAlbums();

  return (
    <Container>
      <AlbumsFilter
        albums={albums}
        loading={isLoadingAlbums}
        className="mb-9"
      />
      <PhotosList
        photos={[
          {
            id: "567",
            title: "Olá mundo",
            imageId: "portrait-tower.png",
            albums: [
              { id: "1234", title: "Album 1" },
              { id: "4321", title: "Album 2" },
              { id: "8976", title: "Album 3" },
            ],
          },
        ]}
      />
    </Container>
  );
}
