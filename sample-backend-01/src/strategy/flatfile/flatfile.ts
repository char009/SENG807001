import PersistenceService from "../../persistenceService";
import fs from 'fs';
import path from 'path';

export default class FlatfilePersistence implements PersistenceService {
  constructor() {
    if (!fs.existsSync(this.getPath('flatfileDb'))) {
      fs.mkdirSync(this.getPath('flatfileDb'));
    }
  }

  create(location: string): boolean {

    fs.writeFileSync(path.join(__dirname, location), "");
    
    return true;
  }

  insert(content: string, location: string): boolean {
    throw new Error('Not Implemented');
  }

  private getPath(...dir: string[]) {
    return path.join(__dirname, ...dir);
  }
}


