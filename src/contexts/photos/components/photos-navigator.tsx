import ButtonIcon from "../../../components/button-icon";
import Skeleton from "../../../components/skeleton";
import ArrowLeftIcon from "../../../assets/icons/chevron-left.svg?react";
import ArrowrightIcon from "../../../assets/icons/chevron-right.svg?react";
import Button from "../../../components/button";
import { useNavigate } from "react-router";
import cx from "classnames";
import classNames from "classnames";

interface PhotosNavigatorProps extends React.ComponentProps<"div"> {
  previousPhotoId?: string;
  nextPhotoId?: string;
  loading?: boolean;
}

export default function PhotosNavigator({
  previousPhotoId,
  nextPhotoId,
  loading,
  ...props
}: PhotosNavigatorProps) {
  const navigate = useNavigate();
  return (
    <div className={cx(`flex gap-2`, classNames)} {...props}>
      {!loading ? (
        <>
          <ButtonIcon
            icon={ArrowLeftIcon}
            variant="secondary"
            disabled={!previousPhotoId}
            onClick={() => navigate(`/fotos/${previousPhotoId}`)}
          />

          <Button
            icon={ArrowrightIcon}
            variant="secondary"
            disabled={!nextPhotoId}
            onClick={() => navigate(`/fotos/${nextPhotoId}`)}
          >
            Proxima Imagem
          </Button>
        </>
      ) : (
        <>
          <Skeleton className="w-10 h-10"></Skeleton>
          <Skeleton className="w-20 h-10"></Skeleton>
        </>
      )}
    </div>
  );
}
