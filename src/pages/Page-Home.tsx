import Container from "../components/container";
import PhotosList from "../contexts/photos/components/photos-list";

export default function Home() {
  return (
    <Container>
      <PhotosList photos={[]} loading />
    </Container>
  );
}
