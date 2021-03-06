import axios, { AxiosError, AxiosResponse } from "axios";
import { Orari } from "../models/orari";
import { Lenda } from "../models/lenda";
import { Prindi } from "../models/prindi";
import { Nxenesi } from "../models/nxenesi";
import { CustomNxenesi } from "../models/customNxenesi";
import { Admin, AdminFormValues } from "../models/user";
import { toast } from "react-toastify";
import { store } from "../stores/store";
import { Professor, ProfFormValues } from "../models/professor";
import { Parent, ParentFormValues } from "../models/parent";
import { FeedbackToNxenesi } from "../models/feedbackToNxenesi";
import { Kontakti } from "../models/kontakti";
import { Nxenesiuser, NxenesiuserFormValues } from "../models/nxenesiuser";
import { Salla } from "../models/salla";
import { Paralelja } from "../models/paralelja";
import { Klasa } from "../models/klasa";
import { Vleresimi } from "../models/Vleresimi";
import { Libri } from "../models/libri";
import { Aktiviteti } from "../models/Aktiviteti";
import { ProfKlasa } from "../models/profKlasa";
import { Familja } from "../models/familja";
import { Syllabusi } from "../models/syllabusi";

const sleep = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

axios.defaults.baseURL = "http://localhost:5000/api";

axios.interceptors.request.use((config) => {
  const token = store.commonStore.token;
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

axios.interceptors.response.use(
  async (response) => {
    await sleep(0);
    return response;
  },
  (error: AxiosError) => {
    const { data, status } = error.response!;
    switch (status) {
      case 400:
        toast.error("bad request");
        break;
      case 401:
        toast.error("unauthorized");
        break;
      case 404:
        toast.error("not found");
        break;
      case 500:
        toast.error("server error");
        break;
    }
    return Promise.reject(error);
  }
);

const responseBody = <T>(response: AxiosResponse<T>) => response.data;
const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) =>
    axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

const Profesoret = {
  list: () => requests.get<Professor[]>("/profesori"),
  details: (id: string) => requests.get<Professor>(`/profesori/${id}`),
  create: (profesori: Professor, EmriLendes: string) =>
    axios.post<void>(`/profesori/${EmriLendes}`, profesori),
  update: (profesori: Professor) =>
    axios.put<void>(`/profesori/${profesori.id}`, profesori),
  delete: (id: string) => axios.delete<void>(`/profesori/${id}`),
  createKlasa: (profesoriKlasa: ProfKlasa, profId: string | undefined, klasaId: string) => axios.post<void>(`/profesori/${profId}&${klasaId}`, profesoriKlasa),
  listKlaset: (id: string | undefined) =>
    requests.get<ProfKlasa[]>(`/profesori/klasat/${id}`),
  deleteKlasa: (id: string | undefined) => axios.delete<void>(`/profesori/profKlasa/${id}`),

};
const Oraret = {
  list: () => requests.get<Orari[]>("/oraret"),
  details: (id: string) => requests.get<Orari>(`/oraret/${id}`),
  create: (orari: Orari) => requests.post<void>(`/oraret`, orari),
  update: (orari: Orari) =>
    requests.put<void>(`/oraret/${orari.orariId}`, orari),
  delete: (id: string) => axios.delete<void>(`/oraret/${id}`),
};
const Aktivitetet = {
  list: () => requests.get<Aktiviteti[]>("/aktivitetet"),
  details: (id: string) => requests.get<Aktiviteti>(`/aktivitetet/${id}`),
  create: (aktiviteti: Aktiviteti) =>
    requests.post<void>(`/aktivitetet`, aktiviteti),
  update: (aktiviteti: Aktiviteti) =>
    requests.put<void>(`/aktivitetet/${aktiviteti.aktivitetiId}`, aktiviteti),
  delete: (id: string) => axios.delete<void>(`/aktivitetet/${id}`),
};

const Lendet = {
  list: () => requests.get<Lenda[]>("/lendet"),
  details: (id: string) => requests.get<Lenda>(`/lendet/${id}`),
  create: (lenda: Lenda, syllabusiId: string) => axios.post<void>(`/lendet/${syllabusiId}`, lenda),
  update: (lenda: Lenda) => axios.put<void>(`/lendet/${lenda.lendaId}`, lenda),
  delete: (id: string) => axios.delete<void>(`/lendet/${id}`),
};
const Syllabuset = {
  list: () => requests.get<Syllabusi[]>("/syllabuset"),
  details: (id: string) => requests.get<Syllabusi>(`/syllabuset/${id}`),
  create: (syllabusi: Syllabusi) => axios.post<void>(`/syllabuset/`, syllabusi),
  update: (syllabusi: Syllabusi) => axios.put<void>(`/syllabuset/${syllabusi.syllabusiId}`, syllabusi),
  delete: (id: string) => axios.delete<void>(`/syllabuset/${id}`),
};

const Prinderit = {
  list: () => requests.get<Prindi[]>("/prinderit"),
  details: (id: string) => requests.get<Prindi>(`/prinderit/${id}`),
  create: (profesori: Prindi) => axios.post<void>("/prinderit", profesori),
  update: (profesori: Prindi | Parent) =>
    axios.put<void>(`/prinderit/${profesori.id}`, profesori),
  delete: (id: string) => axios.delete<void>(`/prinderit/${id}`),
};
const Nxenesit = {
  list: () => requests.get<Nxenesi[]>("/nxenesi"),
  details: (id: string) => requests.get<Nxenesi>(`/nxenesi/${id}`),
  create: (nxenesi: Nxenesi) => axios.post<void>(`/nxenesi`, nxenesi),
  update: (nxenesi: Nxenesi) => {
    console.log("nxenesi inside:", nxenesi);
    return axios.put<void>(`/nxenesi/${nxenesi.id}`, nxenesi);
  },
  delete: (id: string) => axios.delete<void>(`/nxenesi/${id}`),
  listNxensitByKlasa: (emriKlases: string) => requests.get<Nxenesi[]>(`/nxenesi/klasa&${emriKlases}`)
};
const Familjet = {
  list: () => requests.get<Familja[]>("/Familjet"),
  details: (id: string) => requests.get<Familja>(`/Familjet/${id}`),
  create: (familja: Familja, prindiId: string, nxenesiId: string) =>
    axios.post<void>(`/Familjet/${prindiId}&${nxenesiId}`, familja),
  update: (familja: Familja, prindiId: string, nxenesiId: string) =>
    axios.put<void>(
      `/Familjet/${familja.familjaId}/${prindiId}&${nxenesiId}`,
      familja
    ),
  delete: (id: string) => axios.delete<void>(`/Familjet/${id}`),
};

const Account = {
  current: () => requests.get<Admin>("/account"),
  login: (user: AdminFormValues) =>
    requests.post<Admin>("/account/login", user),
};

const AccountProf = {
  currentProf: () => requests.get<Professor>("/account/currentProf"),

  login: (prof: ProfFormValues) =>
    requests.post<Professor>("/account/loginProf", prof),
  register: (prof: ProfFormValues, id: string) =>
    requests.post<Professor>(`/account/registerProf/${id}`, prof),
};
const AccountPrindi = {
  current: () => requests.get<Parent>("/PrindAccount"),
  login: (prindi: ParentFormValues) =>
    requests.post<Parent>("/PrindAccount/loginPrindi", prindi),
  register: (prindi: ParentFormValues) =>
    requests.post<Parent>("/PrindAccount/registerPrind", prindi),
};

const FeedbackToNxenesit = {
  listProf: (id: string | undefined) =>
    requests.get<FeedbackToNxenesi[]>(`/FeedbackToNxenesit/${id}`),
  listNxenesi: (email: string | undefined) =>
    requests.get<FeedbackToNxenesi[]>(`/FeedbackToNxenesit/nxenesi/${email}`),
  create: (feedback: FeedbackToNxenesi) =>
    axios.post<void>(`/FeedbackToNxenesit/`, feedback),
  delete: (id: string) => axios.delete<void>(`/FeedbackToNxenesit/${id}`),
};
const Kontaktet = {
  listPrindi: (id: string | undefined) =>
    requests.get<Kontakti[]>(`/kontakti/${id}`),
  listProf: (email: string | undefined) =>
    requests.get<Kontakti[]>(`/kontakti/prof/${email}`),
  create: (kontakti: Kontakti, profEmail: string | undefined) => axios.post<void>(`/kontakti/${profEmail}`, kontakti),
  delete: (id: string) => axios.delete<void>(`/kontakti/${id}`),
};
const AccountNxenesi = {
  currentNxenesi: () =>
    requests.get<Nxenesiuser>("/NxenesiAccount/currentNxenesi"),
    
  login: (nxenesi: NxenesiuserFormValues) =>
    requests.post<Nxenesiuser>("/NxenesiAccount/loginNxenesi", nxenesi),
  register: (nxenesi: NxenesiuserFormValues) =>
    requests.post<Nxenesiuser>("/NxenesiAccount/registerNxenesi", nxenesi),
};
const Sallat = {
  list: () => requests.get<Salla[]>("/sallat"),
  details: (id: string) => requests.get<Salla>(`/sallat/${id}`),
  create: (salla: Salla) => requests.post<void>(`/sallat`, salla),
  update: (salla: Salla) =>
    requests.put<void>(`/sallat/${salla.sallaId}`, salla),
  delete: (id: string) => axios.delete<void>(`/sallat/${id}`),
};
const Paralelet = {
  list: () => requests.get<Paralelja[]>("/paralelet"),
  details: (id: string) => requests.get<Paralelja>(`/paralelet/${id}`),
  create: (paralelja: Paralelja) =>
    requests.post<void>(`/paralelet`, paralelja),
  update: (paralelja: Paralelja) =>
    requests.put<void>(`/paralelet/${paralelja.paraleljaId}`, paralelja),
  delete: (id: string) => axios.delete<void>(`/paralelet/${id}`),
};
const Klasat = {
  list: () => requests.get<Klasa[]>("/klasat"),
  details: (id: string) => requests.get<Klasa>(`/klasat/${id}`),
  create: (klasa: Klasa, paraleljaId: string, sallaId: string) =>
    requests.post<void>(`/klasat/${paraleljaId}&${sallaId}`, klasa),
  update: (klasa: Klasa, paraleljaId: string, sallaId: string) =>
    requests.put<void>(
      `/klasat/${klasa.klasaId}&${paraleljaId}&${sallaId}`,
      klasa
    ),
  delete: (id: string) => axios.delete<void>(`/klasat/${id}`),
};

const Vleresimet = {
  list: (profId: string | undefined) => requests.get<Vleresimi[]>(`/Vleresimet/prof/${profId}`),
  listNxenesi: (nxenesiId: string | undefined) =>
    requests.get<Vleresimi[]>(`/Vleresimet/nxenesi/${nxenesiId}`),
  listNxenesiByPrindi: (prindiId: string | undefined) =>
    requests.get<Familja[]>(`/Vleresimet/prindi/${prindiId}`),
  details: (id: string) => requests.get<Vleresimi>(`/Vleresimet/${id}`),
  create: (vlersimi: Vleresimi, profID: string | undefined, nxensiId: string | undefined) => axios.post<void>(`/Vleresimet/${profID}&${nxensiId}`, vlersimi),
  update: (vlersimi: Vleresimi, profID: string | undefined, nxensiId: string | undefined) => axios.put<void>(`/Vleresimet/${vlersimi.vleresimiId}/${profID}&${nxensiId}`, vlersimi),
  delete: (id: string) => axios.delete<void>(`/Vleresimet/${id}`)
};

const Librat = {
  list: () => requests.get<Libri[]>("/libri"),
  details: (id: string) => requests.get<Libri>(`/libri/${id}`),
  create: (libri: Libri, EmriLendes: string) =>
    axios.post<void>(`/libri/${EmriLendes}`, libri),
  update: (libri: Libri) => axios.put<void>(`/libri/${libri.id}`, libri),
  delete: (id: string) => axios.delete<void>(`/libri/${id}`),
};

const agent = {
  Profesoret,
  Oraret,
  Lendet,
  Prinderit,
  Nxenesit,
  Account,
  AccountProf,
  AccountPrindi,
  FeedbackToNxenesit,
  Kontaktet,
  AccountNxenesi,
  Sallat,
  Syllabuset,
  Paralelet,
  Klasat,
  Vleresimet,
  Librat,
  Aktivitetet,
  Familjet
};

export default agent;
