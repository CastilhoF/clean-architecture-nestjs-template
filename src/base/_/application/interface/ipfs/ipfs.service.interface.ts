import IpfsCreateOptionsInputDto from './dto/ipfs-create-options-input.dto';
import IpfsCreateOutputDto from './dto/ipfs-create-output.dto';
import { UploadImageIpfsOutputDto } from './dto/upload-image-ipfs-output.dto';

abstract class IpfsServiceInterface {
  abstract create(
    dir: string,
    input: IpfsCreateOptionsInputDto,
  ): Promise<IpfsCreateOutputDto>;

  abstract uploadImage(
    file: Buffer,
    type: string,
    encoding: string,
    filename: string,
  ): Promise<UploadImageIpfsOutputDto>;

  abstract delete(hash: string): Promise<void>;
}

export default IpfsServiceInterface;
