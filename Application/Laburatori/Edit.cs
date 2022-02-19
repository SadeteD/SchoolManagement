using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;
namespace Application.Laburatori
{
    public class Edit
    {

        public class Command : IRequest
        {
            public Laburatiori Laburatiori { get; set; }
        }
        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var laburatori = await _context.Laburatioret.FindAsync(request.Laburatiori.Id);
                _mapper.Map(request.Laburatiori, laburatori);

                await _context.SaveChangesAsync();
                return Unit.Value;
            }
        }
    }
}
        
