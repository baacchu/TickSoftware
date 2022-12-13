using PrimeWebApi.PrimeServices;
using PrimeWebApi.PrimeModels;
using PrimeWebApi.PrimeInterfaces;


namespace WebApi.UnitTest
{
    [TestFixture]
    public class TestPrimeService
    {
        private PrimeNumber _primeNumber;

        [SetUp]
        public void Setup()
        {
            _primeNumber = new PrimeNumber();
        }

        [Test]
        public void No_Prime_Number_Generated_For_1()
        {
            var result = _primeNumber.GeneratePrimeNumber(1);
            Assert.IsNotNull(result);
            Assert.That(result.TotalCount, Is.EqualTo(0));
            Assert.That(result.PrimeNumbers, Is.Not.Null);
            Assert.That(result.PrimeNumbers.Count, Is.EqualTo(0));
            Assert.That(result.RangeEnd, Is.EqualTo(1));
        }

        [Test]
        public void Prime_Number_Generated_For_99()
        {
            var result = _primeNumber.GeneratePrimeNumber(99);
            Assert.That(result.RangeEnd, Is.EqualTo(99));
            Assert.IsNotNull(result);
            Assert.That(result.TotalCount, Is.Not.EqualTo(expected: 0));
            Assert.That(result.TotalCount, Is.EqualTo(25));
            Assert.That(result.PrimeNumbers, Is.Not.Null);
            Assert.That(result.PrimeNumbers.Count, Is.EqualTo(25));
            //Check Random Numbers
            Assert.Contains(13, result.PrimeNumbers);
            Assert.Contains(17, result.PrimeNumbers);
            Assert.Contains(19, result.PrimeNumbers);
        }

    }
}