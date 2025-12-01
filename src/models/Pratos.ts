class Prato {
  description: string
  image: string
  infos: string[]
  button: string
  title: string
  id: number
  avaliacao: number

  constructor(
    description: string,
    image: string,
    infos: string[],
    button: string,
    title: string,
    id: number,
    avaliacao: number
  ) {
    this.description = description
    this.image = image
    this.infos = infos
    this.button = button
    this.title = title
    this.id = id
    this.avaliacao = avaliacao
  }
}

export default Prato
