import { HttpService } from "src/app/http/http.service";
import { environment } from "src/environments/environment";


export class UserHttpRepository {
    constructor(private readonly httpService: HttpService) {}

    async getUsers(): Promise<any> {
        return await this.httpService
            .get(environment.userdetailAPIUrl)
            .toPromise();
    }
}
