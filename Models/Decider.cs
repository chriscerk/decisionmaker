using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace decisionmaker.Models
{
    public class Decider
    {
        public Guid Id = Guid.NewGuid();
        public List<Guid> MyDecisionIds { get; }
        public List<Authority> Roles { get; set; }
        public UserLoginInfo LoginInfo { get; set; }

        public Decider(string email, string name)
        {
            LoginInfo = new UserLoginInfo("loginProvider", email, name);
        }

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
       GoalLocker, OptionLocker, TieBreaker, Administrator
    }
}
