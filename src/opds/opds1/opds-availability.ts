// ==LICENSE-BEGIN==
// Copyright 2017 European Digital Reading Lab. All rights reserved.
// Licensed to the Readium Foundation under one or more contributor license agreements.
// Use of this source code is governed by a BSD-style license
// that can be found in the LICENSE file exposed on Github (readium) in the project repository.
// ==LICENSE-END==

import { XmlObject, XmlXPathSelector } from "@r2-utils-rn/_utils/xml-js-mapper";

@XmlObject({
    app: "http://www.w3.org/2007/app",
    atom: "http://www.w3.org/2005/Atom",
    bibframe: "http://bibframe.org/vocab/",
    dcterms: "http://purl.org/dc/terms/",
    odl: "http://opds-spec.org/odl",
    opds: "http://opds-spec.org/2010/catalog",
    opensearch: "http://a9.com/-/spec/opensearch/1.1/",
    relevance: "http://a9.com/-/opensearch/extensions/relevance/1.0/",
    schema: "http://schema.org",
    thr: "http://purl.org/syndication/thread/1.0",
    xsi: "http://www.w3.org/2001/XMLSchema-instance",
})
export class Availability {

    // XPATH ROOT: /atom:feed/atom:link/opds:availability
    // XPATH ROOT: /atom:feed/atom:entry/atom:link/opds:availability

    // https://wiki.lyrasis.org/display/SIM/OPDS+For+Libraries#OPDSForLibraries-state
    // https://wiki.lyrasis.org/display/SIM/OPDS+For+Libraries#OPDSForLibraries-Fullfilment
    @XmlXPathSelector("@state")
    public State!: string; // see AvailabilityEnum: available, unavailable, reserved, ready

    @XmlXPathSelector("@status")
    public Status!: string; // same as State (for "legacy" / incorrect feeds)

    // https://wiki.lyrasis.org/display/SIM/OPDS+For+Libraries#OPDSForLibraries-sinceanduntil
    @XmlXPathSelector("@since")
    public Since!: Date;

    // https://wiki.lyrasis.org/display/SIM/OPDS+For+Libraries#OPDSForLibraries-sinceanduntil
    @XmlXPathSelector("@until")
    public Until!: Date;
}
