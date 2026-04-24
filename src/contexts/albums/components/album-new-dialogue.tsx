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
import type { Photo } from "../../photos/models/photo";
import SelectCheckBoxIllustration from "../../../assets/images/select-checkbox.svg?react";
import Skeleton from "../../../components/skeleton";
import PhotoImageSelectable from "../../photos/components/photo-image-selectable";
import usePhotos from "../../photos/hooks/use-photos";
interface AlbumNewDialogueProps {
  trigger: React.ReactNode;
}

export default function AlbumNewDialogue({ trigger }: AlbumNewDialogueProps) {
  const {photos, isLoadingPhotos} = usePhotos()

  function handleTogglePhoto(selected: boolean, photoId: string){
    console.log(selected, photoId)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>Criar Album</DialogHeader>
        <DialogBody className="flex flex-col gap-5">
          <InputText placeholder="adicione um titulo" />

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
                    onSelectImage={(select) => handleTogglePhoto(select, photo.id)}
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
            <Button variant="secondary">Cancelar</Button>
          </DialogClose>

          <Button>Criar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
