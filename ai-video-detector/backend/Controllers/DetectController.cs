using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class DetectController : ControllerBase
{
    private readonly HeuristicService _service;
    public DetectController(HeuristicService service) => _service = service;

    [HttpPost]
    public async Task<IActionResult> Detect([FromBody] DetectionRequest request)
    {
        var result = await _service.AnalyzeAsync(request);
        return Ok(result);
    }
}

public record DetectionRequest(string? Base64Frame);
