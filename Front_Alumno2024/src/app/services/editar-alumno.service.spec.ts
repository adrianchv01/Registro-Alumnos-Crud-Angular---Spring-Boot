import { TestBed } from '@angular/core/testing';

import { EditarAlumnoService } from './editar-alumno.service';

describe('EditarAlumnoService', () => {
  let service: EditarAlumnoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditarAlumnoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
