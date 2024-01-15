interface BaseUseCase<InputDto, OutputDto> {
  execute(input: InputDto): Promise<OutputDto> | OutputDto;
}

export default BaseUseCase;
