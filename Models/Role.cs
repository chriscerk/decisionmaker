using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace decisionmaker.Models
{
    public class Role
    {
        public Guid Id = new Guid();
        public string Name;
        public List<Ability> Abilities;
    }

    public enum Ability
    {
        TieBreak
    }
}
