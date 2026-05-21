#!/bin/bash
pip install -r requirements.txt > /dev/null 2>&1
playwright install chromium > /dev/null 2>&1
python3 test_rebuildCandidates.py
