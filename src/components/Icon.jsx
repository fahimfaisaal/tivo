export default function Icon({ path, name }) {
    return (
        <span className="fa-stack">
            <a href={path}>
                <i className="fas fa-circle fa-stack-2x"></i>
                <i className={`${name} fa-stack-1x`}></i>
            </a>
        </span>
    )
}

/**
 * <ul class="nav nav-tabs" id="argoTabs" role="tablist">
          <li class="nav-item"><a class="nav-link" id="nav-tab-1" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="false"><i class="fas fa-list"></i>List Builder</a></li>
          <li class="nav-item"><a class="nav-link active" id="nav-tab-2" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="true"><i class="fas fa-envelope-open-text"></i>Campaigns</a></li>
          <li class="nav-item"><a class="nav-link" id="nav-tab-3" data-toggle="tab" href="#tab-3" role="tab" aria-controls="tab-3" aria-selected="false"><i class="fas fa-chart-bar"></i>Analytics</a></li>
        </ul>
 */