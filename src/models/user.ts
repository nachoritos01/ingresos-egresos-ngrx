export class Usuario {
  static fromFirebase({ email, uid, nombre }: Usuario): Usuario {
    return new Usuario(uid, nombre, email);
  }
  constructor(
    public uid: string,
    public nombre: string,
    public email: string | null
  ) {}
}
