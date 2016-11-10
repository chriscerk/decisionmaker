using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using decisionmaker.Models;

namespace decisionmaker.Controllers.Api.Models
{
    public class DecisionRepository : IDecisionRepository
    {
        private static ConcurrentDictionary<string, Decision> _decisions =
              new ConcurrentDictionary<string, Decision>();


        public void Add(Decision decision)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Decision> GetAll()
        {
            throw new NotImplementedException();
        }

        public Decision Find(string key)
        {
            throw new NotImplementedException();
        }

        public Decision Remove(string key)
        {
            throw new NotImplementedException();
        }

        public void Update(Decision item)
        {
            throw new NotImplementedException();
        }
    }
}
