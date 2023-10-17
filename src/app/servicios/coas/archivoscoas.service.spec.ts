import { TestBed, inject } from '@angular/core/testing';

import { ArchivosCoasService } from './archivoscoas.service';

describe('ArchivosCoasService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ArchivosCoasService]
        });
    });

    it('should be created', inject([ArchivosCoasService], (service:ArchivosCoasService) => {
        expect(service).toBeTruthy();
    }));
});