export default interface PersistenceService {
	create: (location: string) => boolean;
	insert: (content: string, location: string) => boolean;
}

class ImplementedPersistenceService implements PersistenceService {
	create(location: string) {
		return true;
	}

	insert(content: string, location: string) {
		return true;
	}
}

