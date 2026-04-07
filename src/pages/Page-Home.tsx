import Container from "../components/container";
import PhotoWidget from "../contexts/photos/components/photo-widget";
import type { Photo } from "../contexts/photos/models/photo";

export default function Home() {
  return (
    <Container>
      <div className="grid grid-cols-4 gap-9">
        <PhotoWidget
          photo={{
            id: "123",
            title: "Hello world",
            imageId: "portrait-tower.png",
            albums: [
              { id: "12333", title: "Album1" },
              { id: "2144", title: "Album2" },
              { id: "34112", title: "Album3" },
            ],
          }}
        />
        <PhotoWidget
          photo={{
            id: "456",
            title: "Hello world",
            imageId: "portrait-tower.png",
            albums: [
              { id: "12333", title: "Album1" },
              { id: "2144", title: "Album2" },
              { id: "34112", title: "Album3" },
            ],
          }}
        />
        <PhotoWidget
          photo={{
            id: "8910",
            title: "Hello world",
            imageId: "portrait-tower.png",
            albums: [
              { id: "12333", title: "Album1" },
              { id: "2144", title: "Album2" },
              { id: "34112", title: "Album3" },
            ],
          }}
        />
        <PhotoWidget photo={{} as Photo} loading />
      </div>
    </Container>
  );
}
