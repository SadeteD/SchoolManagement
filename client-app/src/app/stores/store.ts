import { createContext, useContext } from "react";
import ProfesoriStore from "./profesoriStore";
import lendaStore from "./lendaStore";
import NxenesiStore from "./nxenesiStore";
import ModalStore from "./modalStore";
import AdminStore from "./adminStore";
import CommonStore from "./commonStore";
import PrindiStore from "./prindiStore";
import PrindStoreAccount from "./prindStoreAccount";
import nxenesiStore from "./nxenesiStore";
import FeedbackStore from "./feedbackStore";
import KontaktiStore from "./kontaktiStore";
import OrariStore from "./orariStore";
import SallaStore from "./sallaStore";
import ParaleljaStore from "./paraleljaStore";
import KlasaStore from "./klasaStore";
import VlersimiStore from "./vlersimiStore";
import LibriStore from "./libriStore";
import FamiljaStore from "./familjaStore";
import syllabusiStore from "./syllabusiStore";
import SyllabusiStore from "./syllabusiStore";
//import StudentetStore from "./studentetStore";

interface Store {
  profesoriStore: ProfesoriStore;
  orariStore: OrariStore;
  lendaStore: lendaStore;
  syllabusiStore: syllabusiStore;
  modalStore: ModalStore;
  adminStore: AdminStore;
  commonStore: CommonStore;
  prindiStore: PrindiStore;
  nxenesiStore: nxenesiStore;
  prindStoreAccount: PrindStoreAccount;
  feedbackStore: FeedbackStore;
  kontaktiStore: KontaktiStore;
  sallaStore: SallaStore;
  paraleljaStore: ParaleljaStore;
  klasaStore: KlasaStore;
  vleresimiStore: VlersimiStore;
  libriStore: LibriStore;
  familjaStore: FamiljaStore;
 // studentetStore: StudentetStore;
}
export const store: Store = {
  profesoriStore: new ProfesoriStore(),
  syllabusiStore: new SyllabusiStore(),
  orariStore: new OrariStore(),
  lendaStore: new lendaStore(),
  nxenesiStore: new NxenesiStore(),
  modalStore: new ModalStore(),
  adminStore: new AdminStore(),
  commonStore: new CommonStore(),
  prindiStore: new PrindiStore(),
  prindStoreAccount: new PrindStoreAccount(),
  feedbackStore: new FeedbackStore(),
  kontaktiStore: new KontaktiStore(),
  sallaStore: new SallaStore(),
  paraleljaStore: new ParaleljaStore(),
  klasaStore: new KlasaStore(),
  vleresimiStore: new VlersimiStore(),
  libriStore: new LibriStore(),
  familjaStore: new FamiljaStore(),
  //studentetStore: new StudentetStore()
};

export const StoreContext = createContext(store);

export function useStore() {
  return useContext(StoreContext);
}
