abstract class UploadGateway {
  abstract image(
    name: string,
    path: string,
    file: Express.Multer.File,
  ): Promise<string>;
  abstract delete(url: string): Promise<void>;

  abstract download(url: string): Promise<Express.Multer.File>;
}

export default UploadGateway;
