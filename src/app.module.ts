import {Module} from '@nestjs/common';
import {AuthModule} from './auth/auth.module';
import {LottoModule} from "./lotto/lotto.module";

@Module({
  imports: [AuthModule, LottoModule],
})
export class AppModule {
}
