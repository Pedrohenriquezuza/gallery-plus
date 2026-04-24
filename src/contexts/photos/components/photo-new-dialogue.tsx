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
import Alert from "../../../components/alert";
import InputSingleFile from "../../../components/Input-Single-File";
import ImagePreview from "../../../components/image-preview";
import Text from "../../../components/text";
import Skeleton from "../../../components/skeleton";
import { useForm } from "react-hook-form";
import useAlbums from "../../albums/hooks/use-albums";

interface PhotoNewDialogueProps {
  trigger: React.ReactNode;
}

export default function PhotoNewDialogue({ trigger }: PhotoNewDialogueProps) {
  const form = useForm();
  const {albums, isLoadingAlbums} = useAlbums()


  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>Adicionar Foto</DialogHeader>

        <DialogBody className="flex flex-col gap-5">
          <InputText
            placeholder="Adicione um titulo"
            maxLength={255}
          ></InputText>

          <Alert>
            Tamanho máximo 50MB
            <br />
            Você pode selecionar arquivos em png, jpg, jpeg
          </Alert>

          <InputSingleFile
            form={form}
            allowedExtensions={["png", "jpg", "jpeg"]}
            maxFileSizeInMB={50}
            replaceBy={<ImagePreview className="w-full h-56" />}
          />

          <div className="space-y-3">
            <Text variant="label-small">Selecionar álbuns</Text>

            <div className="flex flex-wrap gap-3">
              {!isLoadingAlbums &&
                albums.length > 0 &&
                albums.map((album) => (
                  <Button
                    key={album.id}
                    variant="ghost"
                    size="sm"
                    className="truncate"
                  >
                    {album.title}
                  </Button>
                ))}
              {isLoadingAlbums &&
                Array.from({ length: 5 }).map((_, index) => (
                  <Skeleton
                    key={`album-loading-${index}`}
                    className="w-20 h-7"
                  />
                ))}
            </div>
          </div>
        </DialogBody>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="secondary">Cancelar</Button>
          </DialogClose>

          <Button>Adicionar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
