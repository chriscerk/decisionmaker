﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace decisionmaker.Models
{
    public class Goal
    {
        public Guid Id = Guid.NewGuid();
        public Boolean IsLocked { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Rank { get; set; }
    }
}
