import FlatfilePersistence from './flatfile';
import fs from 'fs';
import path from 'path';

describe('flatfile strategy', () => {
  describe('constructor', () => {
    beforeEach(() => {
      if (fs.existsSync(getPath('flatfileDb'))) {
        fs.rmdirSync(getPath('flatfileDb'), { recursive: true });
      }
    });

    test('will create a flatfileDb directory in the current folder if one is not present', () => {
      new FlatfilePersistence();	
      expect(fs.existsSync(path.join(__dirname, 'flatfileDb',))).toBeTruthy();
    });
  });

  describe('create method', () => {
    test.todo('will create a new file if one does not exists already');
  });

  describe('insert method', () => {
    test.todo('will insert info');
  });

});

function getPath(...dir: string[]) {
  return path.join(__dirname, ...dir);
}
