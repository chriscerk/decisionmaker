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
            _decisions.TryAdd(decision.Id.ToString(), decision);
        }

        public IEnumerable<Decision> GetAll()
        {
            return _decisions.Values;
        }

        public Decision Find(string key)
        {
            Decision d;
            _decisions.TryGetValue(key, out d);
            return d;
        }

        public Decision Remove(string key)
        {
            throw new NotImplementedException();
        }

        public void Update(Decision item)
        {
            _decisions.TryUpdate(item.Id.ToString(), item, item);
        }
    }
}
