using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Library.Models
{
    public class Student
    {
        [Key]
        public int Id { get; set; }
        public string StudentName { get; set; }
        public string StudentSurname { get; set; }
        public string Gender { get; set; }
        public DateTime BirthDate { get; set; }
        public string City{ get; set; }

        public string Email  { get; set; }
        [Required]
        [Range(6, int.MaxValue, ErrorMessage = "Password should have more than 6 letters!")]
        public string Password { get; set; }
    }

}
