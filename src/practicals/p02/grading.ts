function calculateGrade(score: any): string {
  
    if (typeof score !== 'number' || isNaN(score)) {
      return 'number';
    }
  
    
    if (score < 0 || score > 100) {
      return 'point 0-100';
    }
  
    
    if (score >= 80) return 'A';
    if (score >= 70) return 'B';
    if (score >= 60) return 'C';
    if (score >= 50) return 'D';
    return 'F';
  }
  
  
  console.log(calculateGrade(85));      
  console.log(calculateGrade(75));      
  console.log(calculateGrade(65));      
  console.log(calculateGrade(55));      
  console.log(calculateGrade(45));      
  console.log(calculateGrade(-10));     
  console.log(calculateGrade(150));     
  console.log(calculateGrade('abc')); 
  console.log(calculateGrade(null)); 
