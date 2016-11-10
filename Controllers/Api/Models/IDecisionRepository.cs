using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using decisionmaker.Models;

namespace decisionmaker.Controllers.Api.Models
{
    public interface IDecisionRepository
    {
        void Add(Decision decision);
        IEnumerable<Decision> GetAll();
        Decision Find(string key);
        Decision Remove(string key);
        void Update(Decision item);
    }
}
