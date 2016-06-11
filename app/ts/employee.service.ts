import {Employee} from './employee';
import {EMPLOYEES} from './mock-employees';

@Injectable()
export class EmployeeService{
    getEmployees() {
        return Promise.resolve(EMPLOYEES);
    }
}
