import { DialogClose } from "@radix-ui/react-dialog";
import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "../../../components/dialog";
import Button from "../../../components/button";
import InputText from "../../../components/Input-Text";
import Text from "../../../components/text";
import SelectCheckBoxIllustration from "../../../assets/images/select-checkbox.svg?react";
import Skeleton from "../../../components/skeleton";
import PhotoImageSelectable from "../../photos/components/photo-image-selectable";
import usePhotos from "../../photos/hooks/use-photos";
import { useForm } from "react-hook-form";
import { albumNewFormSchema } from "../schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
interface AlbumNewDialogueProps {
  trigger: React.ReactNode;
}

import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import useAlbum from "../hooks/use-album";

export default function AlbumNewDialogue({ trigger }: AlbumNewDialogueProps) {
  const [modalOpen, setModalOpen] = React.useState(false);
  const form = useForm<albumNewFormSchema>({
    resolver: zodResolver(albumNewFormSchema),
  });

  const { photos, isLoadingPhotos } = usePhotos();
  const { createAlbum } = useAlbum();
  const [isCreatingAlbum, setIsCreatingAlbum] = React.useTransition();
  React.useEffect(() => {
    if (!modalOpen) {
      form.reset();
    }
  }, [modalOpen, form]);

  function handleTogglePhoto(selected: boolean, photoId: string) {
    const photosIds = form.getValues(`photosIds`) || [];
    let newValue = [];
    if (selected) {
      newValue = [...photosIds, photoId];
    } else {
      newValue = photosIds.filter((id) => id !== photoId);
    }

    form.setValue("photosIds", newValue);
  }

  function handleSubmit(payload: albumNewFormSchema) {
    setIsCreatingAlbum(async () => {
      await createAlbum(payload);
      setModalOpen(false);
    });
  }

  return (
    <Dialog open={modalOpen} onOpenChange={setModalOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <DialogHeader>
            <DialogTitle>Criar álbum</DialogTitle>
            <DialogDescription>
              Crie um novo álbum e selecione fotos
            </DialogDescription>
          </DialogHeader>
          <DialogBody className="flex flex-col gap-5">
            <InputText
              placeholder="adicione um titulo"
              error={form.formState.errors.title?.message}
              {...form.register("title")}
            />

            <div className="space-y-3">
              <Text as="div" variant="label-small" className="mb-3">
                Fotos Cadastradas
              </Text>

              {!isLoadingPhotos && photos.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {photos.map((photo) => (
                    <PhotoImageSelectable
                      key={photo.id}
                      src={`${import.meta.env.VITE_IMAGES_URL}/${photo.imageId}`}
                      title={photo.title}
                      ImageClassName="w-20 h-20 "
                      onSelectImage={(select) =>
                        handleTogglePhoto(select, photo.id)
                      }
                    />
                  ))}
                </div>
              )}

              {isLoadingPhotos && (
                <div className="flex flex-wrap gap-2">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <Skeleton
                      key={`photo-loading-${index}`}
                      className="w-20 h-20 rounded-lg"
                    />
                  ))}
                </div>
              )}

              {!isLoadingPhotos && photos.length === 0 && (
                <div className="w-full flex flex-col justify-center items-center gap-3">
                  <SelectCheckBoxIllustration />
                  <Text variant="paragraph-medium" className="text-center">
                    Nenhuma Foto disponivel para seleção
                  </Text>
                </div>
              )}
            </div>
          </DialogBody>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="secondary" disabled={isCreatingAlbum}>
                Cancelar
              </Button>
            </DialogClose>

            <Button
              type="submit"
              disabled={isCreatingAlbum}
              handling={isCreatingAlbum}
            >
              {isCreatingAlbum ? "Criando..." : "Criar"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
