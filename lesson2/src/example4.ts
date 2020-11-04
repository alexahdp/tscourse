// conjunction-types or intersection types

type CandidateStatus = 'new' | 'inProgress' | 'applied';

interface Profile {
  id: string;
  email: string;
}

interface Candidate {
  vacancyId: string;
  status: CandidateStatus; 
}

const getCandidate = (): Profile & Candidate => ({
  id: '123',
  email: 'alexgmail.com',
  vacancyId: '1234',
  status: 'new',
});

const candidate = getCandidate();

// =====

// Предпочитайте объединения интерфейсов интерфейсам объединений
// неверно
interface Layer {
  layout: FillLayout | LineLayout | PointLayout;
  paint: FillPaint | LinePaint | PointPaint;
}
// верно
interface FillLayer {
  layout: FillLayout;
  paint: FillPaint;
}
interface LineLayer {
  layout: LineLayout;
  paint: LinePaint;
}
interface PointLayer {
  layout: PointLayout;
  paint: PointPaint;
}
type LayerRes = FillLayer | LineLayer | PointLayer;
