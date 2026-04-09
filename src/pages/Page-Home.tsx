import Container from "../components/container";
import AlbumsFilter from "../contexts/albums/components/albums-filter";
import PhotosList from "../contexts/photos/components/photos-list";

export default function Home() {
  return (
    <Container>
      <AlbumsFilter
        albums={[
          { id: "1234", title: "Album 1" },
          { id: "4321", title: "Album 2" },
          { id: "8976", title: "Album 3" },
        ]}
        loading
        className="mb-9"
      />
      <PhotosList
        photos={[
          {
            id: "123",
            title: "Olá mundo",
            imageId: "portrait-tower.png",
            albums: [
              { id: "1234", title: "Album 1" },
              { id: "4321", title: "Album 2" },
              { id: "8976", title: "Album 3" },
            ],
          },
          {
            id: "321",
            title: "Olá mundo",
            imageId: "portrait-tower.png",
            albums: [
              { id: "1234", title: "Album 1" },
              { id: "4321", title: "Album 2" },
              { id: "8976", title: "Album 3" },
            ],
          },
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
