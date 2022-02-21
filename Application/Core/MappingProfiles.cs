using AutoMapper;
using Domain;

namespace Application.Core
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Profesori, Profesori>();
            CreateMap<Syllabusi, Syllabusi>();
            CreateMap<Lenda,Lenda>();
            CreateMap<Prindi, Prindi>();
            CreateMap<Nxenesi, Nxenesi>();
            CreateMap<Familja, Familja>();
            CreateMap<FeedbackToNxenesi, FeedbackToNxenesi>();
            CreateMap<Kontakti, Kontakti>(); 
            CreateMap<Salla, Salla>(); 
            CreateMap<Paralelja, Paralelja>();
            CreateMap<Klasa, Klasa>();
            CreateMap<Orari, Orari>();
            CreateMap<Vleresimi, Vleresimi>();
            CreateMap<Libri, Libri>();
            CreateMap<Aktiviteti,Aktiviteti>();
        }
    }
}