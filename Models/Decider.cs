using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace decisionmaker.Models
{
    public class Decider
    {
        public Guid Id = Guid.NewGuid();
        public List<Guid> MyDecisionIds;
        public List<Authority> Roles;

        public void ApplyRoles(Decision d)
        {
            if(Enumerable.Contains(Roles, Authority.GoalLocker))
            {
                throw new NotImplementedException();
            }
            if (Enumerable.Contains(Roles, Authority.OptionLocker))
            {
                throw new NotImplementedException();
            }
        }
    }

    public enum Authority
    {
       GoalLocker, OptionLocker
    }
}
