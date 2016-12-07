using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace decisionmaker.Models
{
    public class ComplexOption
    {
        public Guid Id = Guid.NewGuid();
        public string Name { get; set; }
        public Collection<object> Facets { get; set; }
        public string[] MetGoals { get; set; }
        public string Description { get; set; }
        public string Notes { get; set; }
    }
}
