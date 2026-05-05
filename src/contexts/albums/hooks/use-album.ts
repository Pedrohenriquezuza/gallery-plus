import { toast } from "sonner";
import type { albumNewFormSchema } from "../schemas";
import type { Album } from "../models/album";
import { api } from "../../../helpers/api";
import { useQueryClient } from "@tanstack/react-query";
import usePhotos from "../../photos/hooks/use-photos";
export default function useAlbum() {
  const queryClient = useQueryClient();
  const { photos } = usePhotos();
  async function createAlbum(payload: albumNewFormSchema) {
    try {
      const { data: album } = await api.post<Album>("/albums", {
        title: payload.title,
      });

      if (payload.photosIds && payload.photosIds.length > 0) {
        await Promise.all(
          payload.photosIds.map((photoid) => {
            const photoAlbumsIds =
              photos
                .find((photo) => photo.id === photo.id)
                ?.albums?.map((album) => album.id) || [];
            return api.put(`/photos/${photoid}/albums`, {
              albumsIds: [...photoAlbumsIds, album.id],
            });
          }),
        );
      }

      queryClient.invalidateQueries({ queryKey: ["albums"] });
      queryClient.invalidateQueries({ queryKey: ["photos"] });

      toast.success("Álbum criado com sucesso");
    } catch (error) {
      toast.error("Erro ao tentar criar album");
      throw error;
    }
  }

  return {
    createAlbum,
  };
}
