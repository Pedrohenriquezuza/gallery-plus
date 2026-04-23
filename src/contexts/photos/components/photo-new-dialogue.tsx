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
import type { Album } from "../../albums/models/album";
import Skeleton from "../../../components/skeleton";
import { useForm } from "react-hook-form";

interface PhotoNewDialogueProps {
  trigger: React.ReactNode;
}

export default function PhotoNewDialogue({ trigger }: PhotoNewDialogueProps) {
  const form = useForm();

  //Apenas para mock, vamos pegar da API em Breve
  const isLoadingAlbum = false;

  const albums: Album[] = [
    { id: "1234", title: "Album 1" },
    { id: "4321", title: "Album 2" },
    { id: "8976", title: "Album 3" },
  ];

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
              {!isLoadingAlbum &&
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
              {isLoadingAlbum &&
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
