import { TypeOrmModule } from '@nestjs/typeorm';
import {UsuarioEntity} from "./usuario.entity";
@Module({
    import:[
        TypeOrmModule.forFeature([UsuarioEntity])
    ]
})
export class UsuarioModule {
    
}