using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Persistence;

namespace Application.Aktivitetet
{
    public class List
    {
        public class Query : IRequest<List<Aktiviteti>>{}

        public class Handler : IRequestHandler<Query, List<Aktiviteti>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<List<Aktiviteti>> Handle(Query request, CancellationToken cancellationToken)
            {
                
                return await _context.Aktivitetet.ToListAsync();
            }
        }
    }
}