namespace PrimeWebApi.PrimeModels
{
    public class PrimeResponse
    {
        public int RangeEnd { get; set; }
        public List<int>? PrimeNumbers { get; set; }
        public int TotalCount => PrimeNumbers==null? 0 : PrimeNumbers.Count;
    }
}
