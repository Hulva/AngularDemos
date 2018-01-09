export class Cube {
    constructor(public id: number, public style: { position: string,
                                                    width: string,
                                                    height: string,
                                                    top: string,
                                                    left: string,
                                                    border: string,
                                                    resize: string,
                                                    overflow: string,
                                                    opacity: number
                                                }, public extra?: any) {  }
}
